Polymer({
  is: 'my-component',
  properties: {
    color: {
      type: String,
      value: 'green'
    }
  },
  created: function()   { console.log('created'); console.dir(this) },
  ready: function()     { console.log('ready', this); },
  attached: function()  { console.log('attached', this); },
  domReady: function()  {

  },
  detached: function()  { console.log('detached', this); },
  attributeChanged: function(attrName, oldVal, newVal) {
    //var newVal = this.getAttribute(attrName);
    console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
  },
  toggle: function() {
    console.log("Toggling");
    this.set('color', this.color=='green'?'red':'green');
  }
});
