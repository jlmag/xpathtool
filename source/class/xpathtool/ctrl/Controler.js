/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 
#asset(xpathtool/*)
#asset(xpathtool/files/*)
 
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
    this.__createXhr();
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
    __req : null,
    __xmlDoc : null,
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
      commands.xpathLoadListCmd.addListener("execute", this.__cookies, this);

      commands.xpathSaveListCmd = new qx.ui.core.Command("Ctrl+B");
      commands.xpathSaveListCmd.addListener("execute", this.__cookies, this);

      commands.xpathEraseListCmd = new qx.ui.core.Command("Ctrl+C");
      commands.xpathEraseListCmd.addListener("execute", this.__cookies, this);

      commands.xpathCopyClipboardCmd = new qx.ui.core.Command("Ctrl+D");
      commands.xpathCopyClipboardCmd.addListener("execute", this.__debugCmd);

      commands.xpathListCopyClipboardCmd = new qx.ui.core.Command("Ctrl+F");
      commands.xpathListCopyClipboardCmd.addListener("execute", this.__debugCmd);

      // Menu Fille
      commands.fileLoadListCmd = new qx.ui.core.Command("Ctrl+G");
      commands.fileLoadListCmd.addListener("execute", this.__cookies, this);

      commands.fileSaveListCmd = new qx.ui.core.Command("Ctrl+H");
      commands.fileSaveListCmd.addListener("execute", this.__cookies, this);

      commands.fileEraseListCmd = new qx.ui.core.Command("Ctrl+I");
      commands.fileEraseListCmd.addListener("execute", this.__cookies, this);

      commands.fileCopyClipboardCmd = new qx.ui.core.Command("Ctrl+K");
      commands.fileCopyClipboardCmd.addListener("execute", this.__debugCmd);

      commands.fileLisCopytClipboardCmd = new qx.ui.core.Command("Ctrl+M");
      commands.fileLisCopytClipboardCmd.addListener("execute", this.__debugCmd);
      
      // menu Clear
      commands.clearResultBoxCmd = new qx.ui.core.Command("Ctrl+N");
      commands.clearResultBoxCmd.addListener("execute", this.__clear, this);

      commands.clearAllCmd = new qx.ui.core.Command("Ctrl+O");
      commands.clearAllCmd.addListener("execute", this.__clear, this);
      
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
     * Create XHR resource
     *
     */
    __createXhr : function() {
      
      var req = this.__req = new qx.io.request.Xhr();
      req.setMethod("GET");
      req.setAccept("application.xml");
      req.setTimeout(10000);
      req.setAsync(true);
      
      req.addListener("success", this.__successXhr, this)
      req.addListener("error", this.__errorXhr)
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
     * XHR success
     *
     */
    __successXhr : function(e) {
        this.debug("XHR success");
        this.debug(e);
        
        this.__fileControls.iFrame.setSource(this.__req.getUrl());
        this.__xmlDoc = this.__req.getResponse();
    },
    
    /**
     * XHR error
     *
     */
    __errorXhr : function(e) {
        this.debug("XHR error");
        this.debug(e);
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
      
      // Compute the xmlDoc by XPath exp
      var text = this.__xpathControls.textArea.getValue();
      var result = xpathtool.ctrl.Xpathtool.textXpathProcess(this.__xmlDoc, value)
      this.__xpathControls.textArea.setValue(text + result);
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
      this.debug("__fileSend");
      
      var url = "./resource/xpathtool/files/";
      var value = this.__fileControls.comboBox.getValue();
      
      this.__fileControls.button.setEnabled(false);
      this.__fileControls.comboBox.addAt(new qx.ui.form.ListItem(value), 0);
      
      // Send xhr      
      if(value != ""){
        url += value;
        this.__req.setUrl(url)
        this.__req.send();
      }
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
     * Save, load or delete cookies
     *
     * @param e {qx.event.type.Data} Event data
     */
    __cookies : function(e) {
      
      var comboBox;
      var arrData = [];
      var menu = e.getData().getUserData("menu");
      var cookiesName = menu + "Cookies";
      var action = e.getData().getUserData("action");
      
      if(menu == "xpath"){
        comboBox = this.__xpathControls.comboBox;
      }
      else if (menu == "file"){
        comboBox = this.__fileControls.comboBox;
      }
      
      var list = comboBox.getChildControl("list");
      
      switch(action)
      {
        case "save": // save xpath exp to cookies
          var selectables = list.getSelectables(true);
          
          if(selectables.length){
            for(var i = 0; i < selectables.length; i++){
              arrData.push(selectables[i].getLabel());
            }          
            qx.bom.Cookie.set(cookiesName, arrData.join(","));
          }
          
          break;
        
        case "load": // load xpath exp from cookies
          var data = qx.bom.Cookie.get(cookiesName);
          
          if(data){
            arrData = data.split(",");
            comboBox.removeAll()
            comboBox.setValue("");
            for(var i = 0; i < arrData.length; i++){  
              comboBox.add(new qx.ui.form.ListItem(arrData[i]));
            }
          }
          
          break;
        
        case "delete": // delete xpath exp and cookies
          //qx.bom.Cookie.del(cookiesName);
          comboBox.removeAll()
          comboBox.setValue("");
          
          break;
      }
    },

    /**
     * Clear result pane or all
     *
     * @param e {qx.event.type.Data} Event data
     */
    __clear : function(e) {
      
      var action = e.getData().getUserData("action");
      var textArea = this.__xpathControls.textArea;
      
      if(action == "result"){
        textArea.setValue("");
      }
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