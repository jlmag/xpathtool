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
  
  construct : function(ctrl) {
    this.base(arguments);
    
    this.__ctrl = ctrl;
    
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
    
    // Private members
    __ctrl: null,
    
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
      xpLoadList.setCommand(this.__ctrl.getCommand("xpathLoadListCmd"));
      
      var xpSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      xpSaveList.setCommand(this.__ctrl.getCommand("xpathSaveListCmd"));
      
      var xpEraseList = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      xpEraseList.setCommand(this.__ctrl.getCommand("xpathEraseListCmd"));
      
      var xpCopyClipboard = new qx.ui.menu.Button("Copy XPath to clipboard", "icon/16/actions/edit-paste.png");
      xpCopyClipboard.setCommand(this.__ctrl.getCommand("xpathCopyClipboardCmd"));
      
      var xpListCopyClipboard = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/edit-paste.png");
      xpListCopyClipboard.setCommand(this.__ctrl.getCommand("xpathListCopyClipboardCmd"));
      
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
      menu.add(xpListCopyClipboard);
      
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
      fileLoadList.setCommand(this.__ctrl.getCommand("fileLoadListCmd"));
      
      var fileSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      fileSaveList.setCommand(this.__ctrl.getCommand("fileSaveListCmd"));
      
      var fileEraseList = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      fileEraseList.setCommand(this.__ctrl.getCommand("fileEraseListCmd"));
      
      var fileCopyClipboard = new qx.ui.menu.Button("Copy address to clipboard", "icon/16/actions/edit-paste.png");
      fileCopyClipboard.setCommand(this.__ctrl.getCommand("fileCopyClipboardCmd"));
      
      var fileListCopyClipboard = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/edit-paste.png");
      fileListCopyClipboard.setCommand(this.__ctrl.getCommand("fileLisCopytClipboardCmd"));

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
      menu.add(fileListCopyClipboard);

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

      var clearResultBox = new qx.ui.menu.Button("Result box", "icon/16/actions/edit-clear.png");
      clearResultBox.setCommand(this.__ctrl.getCommand("clearResultBoxCmd"));
      
      var clearAll = new qx.ui.menu.Button("All", "icon/16/places/user-trash.png");
      clearAll.setCommand(this.__ctrl.getCommand("clearAllCmd"));

      /*eraseResultBox.addListener("execute", this.debugButton);
      eraseAll.addListener("execute", this.debugButton);*/

      menu.add(clearResultBox);
      menu.add(clearAll);

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

      var topic = new qx.ui.menu.Button("Topics", "icon/16/apps/utilities-help.png");
      topic.setCommand(this.__ctrl.getCommand("topicCmd"));
      
      var info = new qx.ui.menu.Button("Info...", "icon/16/apps/utilities-notes.png");
      info.setCommand(this.__ctrl.getCommand("infoCmd"));

      /*showHelp.addListener("execute", this.debugButton);
      infoButton.addListener("execute", this.debugButton);*/

      menu.add(topic);
      menu.add(info);

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