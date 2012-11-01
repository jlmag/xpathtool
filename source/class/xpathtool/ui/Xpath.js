/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */

/**
 * Class Xpath
 *
 * Creates the xpath UI content
 * 
 * @param typeText {String | null} The type of text area
 */
  
qx.Class.define("xpathtool.ui.Xpath", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
    
    // init
    this.setLayout(new qx.ui.layout.VBox(5));
    
    // add boxes
    this.add(this.__getBoxXpathField());
    this.add(this.__getBoxXpathResult(), {flex: 1});
  },
  
  properties : {
  
  },
  
  members : {
    __comboBox: null,
    __button: null,
    __typeText : null,
    __textArea : null,
    
    /**
     * Return Box with comboBox and button for xpath
     *
     * @return {qx.ui.container.Composite} the box with comboBox and button for xpath
     */
    __getBoxXpathField : function() {
      var layout = new qx.ui.layout.HBox(5);
      var container = new qx.ui.container.Composite(layout);
      container.set({
        allowGrowY: false
      });
      
      // The comboBox
      var comboBox = this.__comboBox = new qx.ui.form.ComboBox();
      comboBox.set({
        placeholder: "Enter your XPath syntaxe"  
      });
      
      var comboBoxTextfield = comboBox.getChildControl("textfield");
      comboBoxTextfield.addListener("input", this.__manageButton, this);
      
      // The button
      var button = this.__button = new qx.ui.form.Button("Enter");
      button.setEnabled(false);
      
      container.add(comboBox, ({flex: 1}));
      container.add(button);
      
      return container;
    },
    
    /**
     * Return Box for results
     *
     */
    __getBoxXpathResult : function() {

      var textArea = this.__textArea = new qx.ui.form.TextArea("");
      return textArea;
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
     * Return controls of xpath
     *
     * @return e {Object} Return controls of xpath
     */
    getControls :function(){
      
      var controls = {};
      controls.comboBox = this.__comboBox;
      controls.button = this.__button;
      controls.textArea = this.__textArea;
      
      return controls;
    }
  },
  
  destruct : function() {
    
  }
});