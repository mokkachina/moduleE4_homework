class Device {
    constructor(name) {
    this.name = name;
    }
  
  
  
    electricDeviceWork () {
      let work = false
      if (this.electric && this.switchon) {
        work = true;
      } else {
           work = false;
               }
     return (work);
     }
  }
  class EleDevice extends Device{
    
  constructor (name, power, electric, switchon) {
    super(name);
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;
    this. showPower = function(){
      console.log(name)
    }
  }
  
  }
  
  
  
  let sumPower = function(){
      let sum = 0;
     for(let value of ElecDiv){
      if (value.electricDeviceWork()){
          sum += value.power;
      }else{
          sum;
      }
      
      
  
     }
    return sum;
   
  
  }
  
  
  const lamp = new EleDevice(name = "lampa", power = 30, electric = true, switchon = true);
  const comp = new EleDevice(name = "compyter", power = 20, electric = true, switchon = true);
  const flight = new EleDevice(name = "flashlight", power = 10, electric = true, switchon = false);
  let ElecDiv = [lamp, comp, flight];
  
  console.log(lamp.electricDeviceWork());
  
  console.log(sumPower(ElecDiv));
  lamp.showPower();
  comp.showPower();
  