import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletComponent } from './wallet.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [WalletComponent],
    }).compileComponents();
  });

  it('should create the wallet', () => {
    const fixture = TestBed.createComponent(WalletComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'otus_angular_project'`, () => {
    const fixture = TestBed.createComponent(WalletComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('otus_angular_project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WalletComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('otus_angular_project wallet is running!');
  });
});
