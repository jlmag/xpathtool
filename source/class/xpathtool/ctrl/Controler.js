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
    
    // Private members menu
    __xpathLoadListCmd : null,
    __xpathSaveListCmd : null,
    __xpathEraseListCmd : null,
    __xpathCopyClipboardCmd : null,
    __xpathListCopyClipboardCmd : null,
    __fileLoadListCmd : null,
    __fileSaveListCmd : null,
    __fileEraseListCmd : null,
    __fileCopyClipboardCmd : null,
    __fileLisCopytClipboardCmd : null,
    __clearResultBoxCmd : null,
    __clearAllCmd : null,
    __topicsCmd : null,
    __infoCmd : null,
    
    /**
     * Create commands formenu
     *
     */
    __createCommands : function()
    {
      // menu XPath
      this.__xpathLoadListCmd = new qx.ui.core.Command("Ctrl+A");
      this.__xpathLoadListCmd.addListener("execute", this.__debugCmd);

      this.__xpathSaveListCmd = new qx.ui.core.Command("Ctrl+B");
      this.__xpathSaveListCmd.addListener("execute", this.__debugCmd);

      this.__xpathEraseListCmd = new qx.ui.core.Command("Ctrl+C");
      this.__xpathEraseListCmd.addListener("execute", this.__debugCmd);

      this.__xpathCopyClipboardCmd = new qx.ui.core.Command("Ctrl+D");
      this.__xpathCopyClipboardCmd.addListener("execute", this.__debugCmd);

      this.__xpathListCopyClipboardCmd = new qx.ui.core.Command("Ctrl+F");
      this.__xpathListCopyClipboardCmd.addListener("execute", this.__debugCmd);

      // Menu Fille
      this.__fileLoadListCmd = new qx.ui.core.Command("Ctrl+G");
      this.__fileLoadListCmd.addListener("execute", this.__debugCmd);

      this.__fileSaveListCmd = new qx.ui.core.Command("Ctrl+H");
      this.__fileSaveListCmd.addListener("execute", this.__debugCmd);

      this.__fileEraseListCmd = new qx.ui.core.Command("Ctrl+I");
      this.__fileEraseListCmd.addListener("execute", this.__debugCmd);

      this.__fileCopyClipboardCmd = new qx.ui.core.Command("Ctrl+K");
      this.__fileCopyClipboardCmd.addListener("execute", this.__debugCmd);

      this.__fileLisCopytClipboardCmd = new qx.ui.core.Command("Ctrl+M");
      this.__fileLisCopytClipboardCmd.addListener("execute", this.__debugCmd);
      
      // menu Clear
      this.__clearResultBoxCmd = new qx.ui.core.Command("Ctrl+N");
      this.__clearResultBoxCmd.addListener("execute", this.__debugCmd);

      this.__clearAllCmd = new qx.ui.core.Command("Ctrl+O");
      this.__clearAllCmd.addListener("execute", this.__debugCmd);
      
      // Menu Help
      this.__topicsCmd = new qx.ui.core.Command("Ctrl+X");
      this.__topicsCmd.addListener("execute", this.__debugCmd);
      this.__topicsCmd.setEnabled(false);

      this.__infoCmd = new qx.ui.core.Command("Ctrl+C");
      this.__infoCmd.addListener("execute", this.__debugCmd);
      this.__infoCmd.setEnabled(false);
    },
    
    /**
     * Ghost function
     *
     */
    __debugCmd : function() {
      
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