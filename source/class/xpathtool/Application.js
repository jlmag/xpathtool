/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(xpathtool/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "xpathtool"
 */
qx.Class.define("xpathtool.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }
      
      // The root
      var root = this.getRoot();
      
      // The xpath tool
      var xpathTool = new xpathtool.Xpathtool();
      
      // Add xpathtool in root
      root.add(xpathTool, ({top: 20, left: 20}));
    }
  }
});
