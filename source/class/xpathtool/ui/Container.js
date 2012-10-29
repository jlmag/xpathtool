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
    this.setLayout(new qx.ui.layout.Dock());
    
    // Add te menu bar
    this.add(this.__getMenuBar());
  },
  
  properties : {
  
  },
  
  members : {
    
    /**
     * Return the menu's bar
     *
     * @return {qx.ui.container.Composite} the menu bar
     */
    __getMenuBar : function()
    {
      var frame = new qx.ui.container.Composite(new qx.ui.layout.Grow());
      frame.set({
        allowGrowY: false,
        decorator: "main"
      });

      var toolbar = new qx.ui.toolbar.ToolBar;
      //toolbar.setWidth(600);
      frame.add(toolbar);
      
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

      return frame;
    },
    
    /**
     * Return the menu File
     *
     * @return {qx.ui.menu.Menu} the menu File
     */
    __getFileManu : function()
    {
      var menu = new qx.ui.menu.Menu;

      var newButton = new qx.ui.menu.Button("Load list", "icon/16/actions/document-new.png");
      var openButton = new qx.ui.menu.Button("Save list", "icon/16/actions/document-save.png");
      var closeButton = new qx.ui.menu.Button("Erase list");
      var saveButton = new qx.ui.menu.Button("Copy XPath to clipboard", "icon/16/actions/document-save.png");
      var saveAsButton = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/document-save-as.png");
      
      /*newButton.addListener("execute", this.debugButton);
      openButton.addListener("execute", this.debugButton);
      closeButton.addListener("execute", this.debugButton);
      saveButton.addListener("execute", this.debugButton);
      saveAsButton.addListener("execute", this.debugButton);*/

      menu.add(newButton);
      menu.add(openButton);
      menu.add(closeButton);
      menu.addSeparator();
      menu.add(saveButton);
      menu.add(saveAsButton);
      
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

      var undoButton = new qx.ui.menu.Button("Load list", "icon/16/actions/edit-undo.png");
      var redoButton = new qx.ui.menu.Button("Save list", "icon/16/actions/edit-redo.png");
      var cutButton = new qx.ui.menu.Button("Erase list", "icon/16/actions/edit-cut.png");
      var copyButton = new qx.ui.menu.Button("Copy address to clipboard", "icon/16/actions/edit-copy.png");
      var pasteButton = new qx.ui.menu.Button("Copy list to clipboard", "icon/16/actions/edit-paste.png");

      /*undoButton.addListener("execute", this.debugButton);
      redoButton.addListener("execute", this.debugButton);
      cutButton.addListener("execute", this.debugButton);
      copyButton.addListener("execute", this.debugButton);
      pasteButton.addListener("execute", this.debugButton);*/

      menu.add(undoButton);
      menu.add(redoButton);
      menu.add(cutButton);
      menu.addSeparator();
      menu.add(copyButton);
      menu.add(pasteButton);

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

      var searchButton = new qx.ui.menu.Button("Result box", "icon/16/actions/system-search.png");
      var nextButton = new qx.ui.menu.Button("All");

      /*searchButton.addListener("execute", this.debugButton);
      nextButton.addListener("execute", this.debugButton);*/

      menu.add(searchButton);
      menu.add(nextButton);

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

      var topicsButton = new qx.ui.menu.Button("Topics", "icon/16/apps/utilities-help.png");
      var quickButton = new qx.ui.menu.Button("QooXdoo");
      var onlineButton = new qx.ui.menu.Button("Online Forum");
      var infoButton = new qx.ui.menu.Button("Info...");

      /*topicsButton.addListener("execute", this.debugButton);
      quickButton.addListener("execute", this.debugButton);
      onlineButton.addListener("execute", this.debugButton);
      infoButton.addListener("execute", this.debugButton);*/

      menu.add(topicsButton);
      menu.add(quickButton);
      menu.addSeparator();
      menu.add(onlineButton);
      menu.addSeparator();
      menu.add(infoButton);

      return menu;
    }
  },
  
  destruct : function() {
    
  }
});