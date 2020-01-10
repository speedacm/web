import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';

describe('CounterComponent', () => {
    let component: NotesComponent;
    let fixture: ComponentFixture<NotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).not.toBeNull();
    }));

    it('title should be "home"', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Notes');
    }));

});
