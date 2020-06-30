import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstofadosPage } from './estofados.page';

describe('EstofadosPage', () => {
  let component: EstofadosPage;
  let fixture: ComponentFixture<EstofadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstofadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstofadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
