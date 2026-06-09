import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sample } from './sample';

describe('Sample', () => {
  let component: Sample;
  let fixture: ComponentFixture<Sample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample],
    }).compileComponents();

    fixture = TestBed.createComponent(Sample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de funcionalidad
  it('should render title', async () => {
    const sampleElement = fixture.nativeElement as HTMLElement;
    expect(sampleElement.querySelector('h2')?.textContent).toContain('SAMPLE');
  });

  it('should show alert on button click', () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {
      //mock sin funcionalidad
    });
    const sampleElement = fixture.nativeElement as HTMLElement;
    const button = sampleElement.querySelector('button');
    button?.click();
    expect(window.alert).toHaveBeenCalledWith('Button clicked!');
  });
});
