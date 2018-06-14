import { ComponentFixture } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { HomePage } from "./home";
import { By } from "@angular/platform-browser";
import { NavController } from "ionic-angular";
import { NavControllerMock } from "ionic-mocks-jest";
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Home View', () => {

    let componentFixture: ComponentFixture<HomePage>; // We declare the component to test

    /**
     * Each component must be wrapped into a module
     * So here, we declare a module with the component to test with his dependencies 
     */ 
    beforeEach(async(() => TestBed.configureTestingModule({
        schemas: [
            NO_ERRORS_SCHEMA // To avoid some integration errors from IonicModule 
        ],
        declarations: [HomePage], // MockTranslatePipe is use to mock every i18n call in our component's template
        providers: [
            {provide: NavController, useFactory: () => NavControllerMock.instance()}
        ]
    }).compileComponents()));

    // We instanciate the component
    beforeEach(() => {
        componentFixture = TestBed.createComponent(HomePage);
        componentFixture.autoDetectChanges();
    });

    it('should display a title', () => {
        const titleLabel: HTMLHeadingElement = componentFixture.debugElement.query(By.css("ion-title")).nativeElement;
        expect(titleLabel.textContent).toContain("Ionic Blank"); 
    });

    it('will do a snapshot comparison', () => {
        const fixture = TestBed.createComponent(HomePage);
        expect(fixture).toMatchSnapshot();
    });

    afterEach(() => {
        componentFixture.destroy();
    });
    
});