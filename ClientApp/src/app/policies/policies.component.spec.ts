import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicyComponent } from './Policy.component';

describe('CounterComponent', () => {
    let component: PolicyComponent;
    let fixture: ComponentFixture<PolicyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PolicyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).not.toBeNull();
    }));

    it('title should be "home"', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Policy');
    }));

});
