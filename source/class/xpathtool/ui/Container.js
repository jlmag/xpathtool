/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: 
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */  

/**
 * The main container
 *
 */

qx.Class.define("xpathtool.ui.Container", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
  
    // init
    var layout = new qx.ui.layout.VBox(5)
    this.setLayout(layout);
    this.set({
      minWidth: 600,
      minHeight: 500
    });
    
    // Add te menu bar
    this.add(this.__getMenuBar());
    
    // Add the box for xpath and file
    this.add(this.__getXpathFileBox(), {flex: 1});
  },
  
  properties : {
  
  },
  
  members : {
    
    /**
     * Return the menu bar
     * 
     * @return {qx.ui.container.Composite}
     */
    __getMenuBar : function() {
      var menuBar = new xpathtool.ui.Menu();
      
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
      var fileBox = new xpathtool.ui.File();
      
      container.add(xpathBox, {flex: 1});
      container.add(fileBox, {flex: 2});
      
      return container;
    }
  },
  
  destruct : function() {
    
  }
});