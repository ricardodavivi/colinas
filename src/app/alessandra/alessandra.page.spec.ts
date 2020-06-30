import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlessandraPage } from './alessandra.page';

describe('AlessandraPage', () => {
  let component: AlessandraPage;
  let fixture: ComponentFixture<AlessandraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlessandraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlessandraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
