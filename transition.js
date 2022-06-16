import Highway from '@dogstudio/highway';
import {Timelinelite} from 'gasp'; 

class fade extends Highway.Transition{
    in({from,to,done}){
    const t1 = new Timelinelite();
    t1.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: '50%'})
    .fromTo(to, 0.5, {height : '2vh'}, {height : '9vh', top: '10%', onComplete: function(){
        done();
    } })
    }
    out({from, done}){
        done();
    }


}
export default fade;