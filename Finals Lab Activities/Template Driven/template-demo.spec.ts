import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TemplateDemoComponent } from './template-demo';

describe('TemplateDemoComponent', () => {
  let component: TemplateDemoComponent;
  let fixture: ComponentFixture<TemplateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDemoComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
