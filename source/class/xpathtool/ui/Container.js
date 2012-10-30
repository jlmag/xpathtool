/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: 
 
******************************************************************* */  
  
/* ******************************************************************* 
 
#asset(qx/icon/${qx.icontheme}/16/actions/document-new.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-save.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-save-as.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-undo.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-redo.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-cut.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-copy.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-paste.png)
#asset(qx/icon/${qx.icontheme}/16/actions/system-search.png)
#asset(qx/icon/${qx.icontheme}/16/apps/utilities-help.png)
 
******************************************************************* */  

/**
 * The main container
 *
 */

qx.Class.define("xpathtool.ui.Container", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
  
    // the layout
    var layout = new qx.ui.layout.Dock().set({
      spacingY: 5
    });
    this.setLayout(layout);
    
    // Add te menu bar
    this.add(this.__getMenuBar(), {edge:"north"});
    
    // Add the box for xpath and file
    this.add(this.__getXpathFileBox(), {edge:"north"});
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
      
      container.add(xpathBox);
      container.add(fileBox, ({flex: 1}));
      
      return container;
    }
  },
  
  destruct : function() {
    
  }
});