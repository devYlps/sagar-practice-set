/******************OOPS WITH JAVASCRIPT************************* */
/***CLASS IN OOPS JS**********  */
// example of railway form
class RailWayForm {
  submit() {
    alert(this.name + " your form is submit");
  }
  cancel() {
    alert(this.name + " your form is cancel")
  }
  fill(adname){
    this.name = adname
  }
}

let sagarForm = new RailWayForm();
sagarForm.fill("Sagar")
let rakeshForm = new RailWayForm();
rakeshForm.fill("rakesh")

sagarForm.submit();
rakeshForm.submit();
rakeshForm.cancel();
