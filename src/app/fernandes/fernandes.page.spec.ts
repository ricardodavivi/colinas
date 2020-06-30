import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FernandesPage } from './fernandes.page';

describe('FernandesPage', () => {
  let component: FernandesPage;
  let fixture: ComponentFixture<FernandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FernandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FernandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
