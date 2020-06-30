import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovafarmaPage } from './novafarma.page';

describe('NovafarmaPage', () => {
  let component: NovafarmaPage;
  let fixture: ComponentFixture<NovafarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovafarmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovafarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
