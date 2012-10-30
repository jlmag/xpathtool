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
    this.add(this.__getBoxFileIframe(), {flex: 2});
  
  },
  
  properties : {
  
  },
  
  members : {
    
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
      var comboBox = new qx.ui.form.ComboBox();
      comboBox.set({
        placeholder: "Enter your file path"  
      });
      
      // The button
      var button = new qx.ui.form.Button("Load");
      
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
      var iframe = new qx.ui.embed.Iframe("http://www.qooxdoo.org");
      
      return iframe;
    }
  },
  
  destruct : function() {
    
  }
});