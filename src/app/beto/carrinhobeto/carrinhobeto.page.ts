import { Component, OnInit } from '@angular/core';
import { Fruta2Service } from '../shared/fruta2.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { AlertController, ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinhobeto',
  templateUrl: './carrinhobeto.page.html',
  styleUrls: ['./carrinhobeto.page.scss'],
})
export class CarrinhobetoPage implements OnInit {
  tasks: any;
  task: any;

  constructor(private fruta2Service: Fruta2Service,
    private toast: ToastService,
    private alert: AlertService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) 
    { 
      let tasksJson = localStorage.getItem('tasksDb');
      if (tasksJson != null) {
        this.tasks = JSON.parse(tasksJson);
      }
    }

  ngOnInit() { 
    this.task =  JSON.parse(localStorage.getItem('tasksDb'));   
  }
  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header:"O que voce quer?",
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmarck-circle',
        handler:() => {
          task.done = !task.done;
          this.updateLocalStorage();
        }
      }
        , {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Calcel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  delete(task: any  ) {
    this.tasks = this.tasks.filter(taskArray => task != taskArray);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
  }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que você quer?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Pagar?'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            this.add(form.taskToDo);
          }
        }
      ]
    });
    await alert.present();
  }
  async add(taskToDo: string) {
    if (taskToDo.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe o que quer',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    let task = { name: taskToDo, done: false };
    this.tasks.push(task);
    this.updateLocalStorage();
  }
  

}
