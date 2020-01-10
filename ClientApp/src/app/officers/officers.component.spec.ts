import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficersComponent } from './officers.component';

describe('CounterComponent', () => {
    let component: OfficersComponent;
    let fixture: ComponentFixture<OfficersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OfficersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfficersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).not.toBeNull();
    }));

    it('title should be "home"', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Officers');
    }));

});
