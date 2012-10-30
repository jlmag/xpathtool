/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */  
  
qx.Class.define("xpathtool.ui.Xpath", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
    
    // init
    this.setLayout(new qx.ui.layout.VBox(5));
  
    this.add(this.__getBoxXpathField());
    this.add(this.__getBoxXpathResult(), ({flex: 1}));
  },
  
  properties : {
  
  },
  
  members : {
    
    /**
     * Return Box with comboBox and button for xpath
     *
     */
    __getBoxXpathField : function() {
      var layout = new qx.ui.layout.HBox(5);
      var container = new qx.ui.container.Composite(layout);
      
      var comboBox = new qx.ui.form.ComboBox();
      comboBox.set({
        placeholder: "Enter your XPath syntaxe"  
      });
      
      var button = new qx.ui.form.Button("Enter");
      
      container.add(comboBox, ({flex: 1}));
      container.add(button);
      
      return container;
    },
    
    /**
     * Return Box for results
     *
     */
    __getBoxXpathResult : function() {
        var textArea = new qx.ui.form.TextArea("");
        
      return textArea;
    }
  },
  
  destruct : function() {
    
  }
});