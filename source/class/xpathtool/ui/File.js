/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */  
  
qx.Class.define("xpathtool.ui.File", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
    
    // init
    var layout = new qx.ui.layout.VBox(5);
    this.setLayout(layout);
    
    // add iFrame
    this.add(this.__getBoxFileField());
    this.add(this.__getBoxFileIframe(), {flex: 1});
  
  },
  
  properties : {
  
  },
  
  members : {
    __comboBox: null,
    __button: null,
    __iFrame : null,
    
    /**
     * Return Box with comboBox and button for file
     *
     * @return {qx.ui.container.Composite} the box with comboBox and button for file
     */
    __getBoxFileField : function() {
      var layout = new qx.ui.layout.HBox(5);
      var container = new qx.ui.container.Composite(layout);
      container.set({
        allowGrowY: false
      });
      
      // The comboBox
      var comboBox = this.__comboBox = new qx.ui.form.ComboBox();
      comboBox.set({
        placeholder: "Enter your file path"  
      });
      
      var comboBoxTextfield = comboBox.getChildControl("textfield");
      comboBoxTextfield.addListener("input", this.__manageButton, this);
      
      // The button
      var button = this.__button = new qx.ui.form.Button("Load");
      button.setEnabled(false);
      
      container.add(comboBox, ({flex: 1}));
      container.add(button);
      
      return container;
    },
  
    /**
     * Return the iFrame to show xml file
     * 
     * @return {qx.ui.embed.Iframe} the iFrame to show xml file
     */
    __getBoxFileIframe : function() {
      
      // The iFrame
      var iframe = this.__iFrame = new qx.ui.embed.ThemedIframe("http://www.qooxdoo.org");
      
      return iframe;
    },
    
    /**
     * Control the button enable
     *
     * @param e {qx.event.type.Data} The data event
     */
    __manageButton : function(e) {
      var value = e.getData();
      
      this.__button.setEnabled(value.length > 0);    
    },
    
    /**
     * Return controls of file
     *
     * @return e {Object} Return controls of file
     */
    getControls :function(){
      var controls = {};
      controls.comboBox = this.__comboBox;
      controls.button = this.__button;
      controls.iframe = this.__iFrame;
      
      return controls;
    }
  },
  
  destruct : function() {
    
  }
});