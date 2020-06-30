import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KuriangoPage } from './kuriango.page';

describe('KuriangoPage', () => {
  let component: KuriangoPage;
  let fixture: ComponentFixture<KuriangoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuriangoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KuriangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
