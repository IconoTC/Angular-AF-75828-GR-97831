import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // test de implementación
  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(component['title']()).toBe('Demo-01');
  });

  // Test de funcionalidad
  it('should render title', async () => {
    const appElement = fixture.nativeElement as HTMLElement;
    expect(appElement.querySelector('h1')?.textContent).toContain('Demo-01');
  });
});
