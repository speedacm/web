import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SigsComponent } from './sigs.component';

describe('CounterComponent', () => {
    let component: SigsComponent;
    let fixture: ComponentFixture<SigsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SigsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SigsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).not.toBeNull();
    }));

    it('title should be "home"', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Sigs');
    }));

});
