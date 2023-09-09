import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit  {
  private interval:any;
  private startTime!: number;
  public displayTime:string='00:00:00';
  public isRunning: boolean=false;

  constructor(){}

  ngOnInit():void{}

  START(){
    if(!this.isRunning)
    {
      this.isRunning = true;
      this.startTime = Date.now()- (this.startTime || 0);
      this.interval = setInterval(()=>{
        const elapsed_Time = Date.now()-this.startTime;
        this.displayTime = this.formatTime(elapsed_Time);

      },1000);
    }
  }
  STOP(){
    if(this.isRunning)
    {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  RESET(){
    clearInterval(this.interval)
    this.isRunning = false;
    this.startTime = 0;
    this.displayTime = '00:00:00';
  }
  
  private formatTime(milliseconds:number):string{
    const totalSeconds = Math.floor(milliseconds/1000);
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds % 3600)/ 60);
    const seconds = totalSeconds % 60;
    return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
   }
   private padNumber(num:number):string{
     return num.toString().padStart(2, '0');
   }
 }



