/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 
#asset(qx/icon/${qx.icontheme}/16/apps/utilities-notes.png)
#asset(qx/icon/${qx.icontheme}/16/places/user-trash.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-new.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-open.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-save.png)
#asset(qx/icon/${qx.icontheme}/16/actions/document-save-as.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-clear.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-undo.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-redo.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-cut.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-copy.png)
#asset(qx/icon/${qx.icontheme}/16/actions/edit-paste.png)
#asset(qx/icon/${qx.icontheme}/16/actions/system-search.png)
#asset(qx/icon/${qx.icontheme}/16/apps/utilities-help.png)
 
******************************************************************* */  

/**
 * The menu container
 *
 */

qx.Class.define("xpathtool.ui.Menu", {  
  
  extend : qx.ui.container.Composite,
  
  construct : function() {
    this.base(arguments);
    
    // Init
    this.setLayout(new qx.ui.layout.Grow());
    this.set({
        allowGrowY: false,
        decorator: "main"
    });
    
    // Create the menu bar
    this.__createMenuBar();
  },
  
  properties : {
  
  },
  
  /*
  *****************************************************************************
  MEMBERS
  *****************************************************************************
  */
  
  members : {
    
    /**
     * Create the menu's bar
     *
     */
    __createMenuBar : function()
    {

      var toolbar = new qx.ui.toolbar.ToolBar;
      this.add(toolbar);
      
      var menuPart = new qx.ui.toolbar.Part;
      var helpPart = new qx.ui.toolbar.Part;
      
      toolbar.add(menuPart);
      toolbar.addSpacer();
      toolbar.add(helpPart);

      var xpathMenu = new qx.ui.toolbar.MenuButton("XPath");
      var fileMenu = new qx.ui.toolbar.MenuButton("Files");
      var clearMenu = new qx.ui.toolbar.MenuButton("Clear");
      var helpMenu = new qx.ui.toolbar.MenuButton("Help");

      xpathMenu.setMenu(this.__getXpathMenu());
      fileMenu.setMenu(this.__getFileMenu());
      clearMenu.setMenu(this.__getClearMenu());
      helpMenu.setMenu(this.__getHelpMenu());

      menuPart.add(xpathMenu);
      menuPart.add(fileMenu);
      menuPart.add(clearMenu);
      helpPart.add(helpMenu);
    },
    
    /**
     * Return the menu File
     *
     * @return {qx.ui.menu.Menu} the menu File
     */
    __getXpathMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var xpLoadList = new qx.ui.menu.Button("Load list", "icon/16/actions/document-open.png");
      var xpSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      var xpEraseList = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      var xpCopyClipboard = new qx.ui.menu.Button("Copy XPath to clipboard", "icon/16/actions/edit-paste.png");
      var xpCopyListClipboard = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/edit-paste.png");
      
      /*xpLoadList.addListener("execute", this.debugButton);
      xpSaveList.addListener("execute", this.debugButton);
      xpEraseList.addListener("execute", this.debugButton);
      xpCopyClipboard.addListener("execute", this.debugButton);
      xpCopyListClipboard.addListener("execute", this.debugButton);*/

      menu.add(xpLoadList);
      menu.add(xpSaveList);
      menu.add(xpEraseList);
      menu.addSeparator();
      menu.add(xpCopyClipboard);
      menu.add(xpCopyListClipboard);
      
      return menu;
    },

    /**
     * Return the menu Edit
     *
     * @return {qx.ui.menu.Menu} the menu Edit
     */
    __getFileMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var fileLoadList = new qx.ui.menu.Button("Load list", "icon/16/actions/document-open.png");
      var fileSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      var fileEraseList = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      var fileCopyClipboard = new qx.ui.menu.Button("Copy address to clipboard", "icon/16/actions/edit-paste.png");
      var fileCopyListClipboard = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/edit-paste.png");

      /*fileLoadList.addListener("execute", this.debugButton);
      fileSaveList.addListener("execute", this.debugButton);
      fileEraseList.addListener("execute", this.debugButton);
      fileCopyClipboard.addListener("execute", this.debugButton);
      fileCopyListClipboard.addListener("execute", this.debugButton);*/

      menu.add(fileLoadList);
      menu.add(fileSaveList);
      menu.add(fileEraseList);
      menu.addSeparator();
      menu.add(fileCopyClipboard);
      menu.add(fileCopyListClipboard);

      return menu;
    },

    /**
     * Return the menu Search
     *
     * @return {qx.ui.menu.Menu} the menu Search
     */
    __getClearMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var eraseResultBox = new qx.ui.menu.Button("Result box", "icon/16/actions/edit-clear.png");
      var eraseAll = new qx.ui.menu.Button("All", "icon/16/places/user-trash.png");

      /*eraseResultBox.addListener("execute", this.debugButton);
      eraseAll.addListener("execute", this.debugButton);*/

      menu.add(eraseResultBox);
      menu.add(eraseAll);

      return menu;
    },

    /**
     * Return the menu Help
     *
     * @return {qx.ui.menu.Menu} the menu Help
     */
    __getHelpMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var showHelp = new qx.ui.menu.Button("Topics", "icon/16/apps/utilities-help.png");
      var infoButton = new qx.ui.menu.Button("Info...", "icon/16/apps/utilities-notes.png");

      /*showHelp.addListener("execute", this.debugButton);
      infoButton.addListener("execute", this.debugButton);*/

      menu.add(showHelp);
      menu.add(infoButton);

      return menu;
    }
  },
  
  /*
  *****************************************************************************
  DESTRUCTOR
  *****************************************************************************
  */
  
  destruct : function() {
    
  }
});