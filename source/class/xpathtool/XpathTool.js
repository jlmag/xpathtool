/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */  

/**
 * The main container
 *
 */

qx.Class.define("xpathtool.XpathTool", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
  
    // init
    var layout = new qx.ui.layout.VBox(5)
    this.setLayout(layout);
    this.set({
      minWidth: 700,
      minHeight: 500
    });
    
    // Create the controler
    this.__controler = new xpathtool.ctrl.Controler();
    
    // Create the UI (menubar and boxes for xpath and file)
    this.__menuBar = this.__getMenuBar(this.__controler);
    this.__xpathFileBox = this.__getXpathFileBox();
    
    this.add(this.__menuBar);
    this.add(this.__xpathFileBox, {flex: 1});
  },
  
  properties : {
  
  },
  
  members : {
    
    // Privates members
    __menuBar : null,
    __xpathFileBox : null,
    __controler : null,
    __xpathControls : null,
    __fileControls : null,
    
    /**
     * Return the menu bar
     * 
     * @return {qx.ui.container.Composite}
     */
    __getMenuBar : function(ctrl) {
      var menuBar = new xpathtool.ui.Menu(ctrl);
      
      return menuBar;
    },
    
    /**
     * Return the box for xpath and file
     * 
     * @return {qx.ui.container.Composite} The box with Xpath box and file box
     */
    __getXpathFileBox : function() {
      var layout = new qx.ui.layout.HBox(5);
      var container = new qx.ui.container.Composite(layout);
      
      var xpathBox = new xpathtool.ui.Xpath();
      this.__controler.setControls("xpath", xpathBox.getControls());
      
      var fileBox = new xpathtool.ui.File();
      this.__controler.setControls("file", fileBox.getControls());
      
      container.add(xpathBox, {flex: 1});
      container.add(fileBox, {flex: 2});
      
      return container;
    }
  },
  
  destruct : function() {
    
  }
});