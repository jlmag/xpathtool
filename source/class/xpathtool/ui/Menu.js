/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
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

      var fileMenu = new qx.ui.toolbar.MenuButton("XPath");
      var editMenu = new qx.ui.toolbar.MenuButton("Files");
      var searchMenu = new qx.ui.toolbar.MenuButton("Clear");
      var helpMenu = new qx.ui.toolbar.MenuButton("Help");

      fileMenu.setMenu(this.__getFileManu());
      editMenu.setMenu(this.__getEditMenu());
      searchMenu.setMenu(this.__getSearchMenu());
      helpMenu.setMenu(this.__getHelpMenu());

      menuPart.add(fileMenu);
      menuPart.add(editMenu);
      menuPart.add(searchMenu);
      helpPart.add(helpMenu);
    },
    
    /**
     * Return the menu File
     *
     * @return {qx.ui.menu.Menu} the menu File
     */
    __getFileManu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var xpLoadList = new qx.ui.menu.Button("Load list", "icon/16/actions/document-new.png");
      var xpSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      var xpEraseList = new qx.ui.menu.Button("Erase list");
      var xpCopyClipboard = new qx.ui.menu.Button("Copy XPath to clipboard", "icon/16/actions/document-save.png");
      var xpCopyListClipboard = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/document-save-as.png");
      
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
    __getEditMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var fileLoadList = new qx.ui.menu.Button("Load list", "icon/16/actions/edit-undo.png");
      var fileSaveList = new qx.ui.menu.Button("Save list", "icon/16/actions/edit-redo.png");
      var fileEraseList = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      var fileCopyClipboard = new qx.ui.menu.Button("Copy address to clipboard", "icon/16/actions/edit-copy.png");
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
    __getSearchMenu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var eraseResultBox = new qx.ui.menu.Button("Result box", "icon/16/actions/system-search.png");
      var eraseAll = new qx.ui.menu.Button("All");

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
      /*var quickButton = new qx.ui.menu.Button("QooXdoo");
      var onlineButton = new qx.ui.menu.Button("Online Forum");
      var infoButton = new qx.ui.menu.Button("Info...");*/

      /*showHelp.addListener("execute", this.debugButton);
      quickButton.addListener("execute", this.debugButton);
      onlineButton.addListener("execute", this.debugButton);
      infoButton.addListener("execute", this.debugButton);*/

      menu.add(showHelp);
      /*menu.add(quickButton);
      menu.addSeparator();
      menu.add(onlineButton);
      menu.addSeparator();
      menu.add(infoButton);*/

      return menu;
    }
  },
  
  destruct : function() {
    
  }
});