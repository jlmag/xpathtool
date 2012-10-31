/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 
 
******************************************************************* */

/**
 * The main controler
 *
 */
  
qx.Class.define("xpathtool.ctrl.Controler", {  
  
  extend : qx.core.Object,
  
  construct : function() {
    this.base(arguments);
  
    // Create commands
    this.__createCommands();
  },
  
  /*
  *****************************************************************************
  PROPERTIES
  *****************************************************************************
  */
  
  properties : {
  
  },
  
  /*
  *****************************************************************************
  MEMBERS
  *****************************************************************************
  */
  
  members : {
    
    // Privates members
    __commands : null,
    __xpathControls : null,
    __fileControls : null,
    
    /**
     * Create commands formenu
     *
     */
    __createCommands : function()
    {
      var commands = {};
      
      // menu XPath
      commands.xpathLoadListCmd = new qx.ui.core.Command("Ctrl+A");
      commands.xpathLoadListCmd.addListener("execute", this.__debugCmd);

      commands.xpathSaveListCmd = new qx.ui.core.Command("Ctrl+B");
      commands.xpathSaveListCmd.addListener("execute", this.__debugCmd);

      commands.xpathEraseListCmd = new qx.ui.core.Command("Ctrl+C");
      commands.xpathEraseListCmd.addListener("execute", this.__debugCmd);

      commands.xpathCopyClipboardCmd = new qx.ui.core.Command("Ctrl+D");
      commands.xpathCopyClipboardCmd.addListener("execute", this.__debugCmd);

      commands.xpathListCopyClipboardCmd = new qx.ui.core.Command("Ctrl+F");
      commands.xpathListCopyClipboardCmd.addListener("execute", this.__debugCmd);

      // Menu Fille
      commands.fileLoadListCmd = new qx.ui.core.Command("Ctrl+G");
      commands.fileLoadListCmd.addListener("execute", this.__debugCmd);

      commands.fileSaveListCmd = new qx.ui.core.Command("Ctrl+H");
      commands.fileSaveListCmd.addListener("execute", this.__debugCmd);

      commands.fileEraseListCmd = new qx.ui.core.Command("Ctrl+I");
      commands.fileEraseListCmd.addListener("execute", this.__debugCmd);

      commands.fileCopyClipboardCmd = new qx.ui.core.Command("Ctrl+K");
      commands.fileCopyClipboardCmd.addListener("execute", this.__debugCmd);

      commands.fileLisCopytClipboardCmd = new qx.ui.core.Command("Ctrl+M");
      commands.fileLisCopytClipboardCmd.addListener("execute", this.__debugCmd);
      
      // menu Clear
      commands.clearResultBoxCmd = new qx.ui.core.Command("Ctrl+N");
      commands.clearResultBoxCmd.addListener("execute", this.__debugCmd);

      commands.clearAllCmd = new qx.ui.core.Command("Ctrl+O");
      commands.clearAllCmd.addListener("execute", this.__debugCmd);
      
      // Menu Help
      commands.topicCmd = new qx.ui.core.Command("Ctrl+X");
      commands.topicCmd.addListener("execute", this.__debugCmd);
      commands.topicCmd.setEnabled(false);

      commands.infoCmd = new qx.ui.core.Command("Ctrl+C");
      commands.infoCmd.addListener("execute", this.__debugCmd);
      commands.infoCmd.setEnabled(false);
      
      this.__commands = commands;
    },
    
    /**
    * Get the command with the given command id
    *
    * @param commandId {String} the command's command id
    * @return {qx.ui.core.Command} The command
    */
    getCommand : function(commandId) {
      
      return this.__commands[commandId];
    },
    
    /**
     * Set controls of xpath box and file box
     *
     */
    setControls : function(from, controls) {
      
      if(from == "xpath"){
        this.__xpathControls = controls;
        this.__addListenerForXpath();        
      }
      else if (from == "file"){
        this.__fileControls = controls;
        this.__addListenerForFile();
      }
    },
    
    /**
     * Attach listeners for xpath
     *
     */
    __addListenerForXpath : function() {
      this.__xpathControls.button.addListener("execute", this.__xpathSend, this);
      var list = this.__xpathControls.comboBox.getChildControl("list");
      list.addListener("click", this.__xpathChangeSelection, this);
    },
    
    /**
     * Attach listeners for file
     *
     */
    __addListenerForFile : function() {
      this.__fileControls.button.addListener("execute", this.__fileSend, this);
      var list = this.__fileControls.comboBox.getChildControl("list");
      list.addListener("click", this.__fileChangeSelection, this);
    },
    
    /**
     * Update xpath data
     *
     * @param e {qx.event.type.Data} Data event
     */
    __xpathSend : function(e){
      this.__xpathControls.button.setEnabled(false);
      
      var value = this.__xpathControls.comboBox.getValue();
      var item = new qx.ui.form.ListItem(value);
      
      this.__xpathControls.comboBox.addAt(item, 0);
    },
    
    /**
     * on selection change xpath 
     *
     * @param e {qx.event.type.Data} Data event
     */
    __xpathChangeSelection : function(e){
      this.__xpathControls.button.setEnabled(true);
    },
    
    /**
     * Update file data
     *
     * @param e {qx.event.type.Data} Data event
     */
    __fileSend : function(e){
      this.__fileControls.button.setEnabled(false);
      
      var value = this.__fileControls.comboBox.getValue();
      var item = new qx.ui.form.ListItem(value);
      
      this.__fileControls.comboBox.addAt(item, 0);
    },
    
    /**
     * on selection change file 
     *
     * @param e {qx.event.type.Data} Data event
     */
    __fileChangeSelection : function(e){
      this.__fileControls.button.setEnabled(true);
    },
    
    /**
     * Ghost function
     *
     */
    __debugCmd : function(e) {
      this.debug(e.getData().getLabel());
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