import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliciasPage } from './delicias.page';

describe('DeliciasPage', () => {
  let component: DeliciasPage;
  let fixture: ComponentFixture<DeliciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
