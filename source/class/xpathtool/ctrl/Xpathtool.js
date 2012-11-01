/* ******************************************************************* 
 
   Copyright: 
 
   License: 
 
   Authors: Jean-Luc MAGNAN
 
******************************************************************* */  
  
/* ******************************************************************* 
 

 
******************************************************************* */

/**
 * Static Class Xpath
 *
 * Utilities for processing Xpath
 *
 */
  
qx.Class.define("xpathtool.ctrl.Xpathtool", {  
  
  statics : {
    
    /**
     * textXpathProcess, Search inside xmlDoc by XPath exp
     *
     * @param xmlDoc {xmlDoc} The xml doument
     * @param xpath {String} The XPath expression
     *
     * @returns {String} the text result
     *
     */
    textXpathProcess : function(xmlDoc, xpath) {
      
      // ouput text
      var text = "XPath : " + xpath + "\n";
      
      // namespace definition
      var namespaces =
      {
        "tc2" : "http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2",
        "tc2u" : "http://www.garmin.com/xmlschemas/UserProfile/v2"
      };
      
      var typeNode =
      {
        "1": "ELEMENT",
        "2": "ATTRIBUTE",
        "3": "TEXT"
      }
      
      // regexp
      var reg = /\s/;
      
      // array nodes
      var result = qx.xml.Element.selectNodes(xmlDoc, xpath, namespaces);
      var nbResult = result.length;
      
      text += "Nb nodes : " + nbResult + "\n\n";
      
      for( var i = 0; i < nbResult; i++)
      {
        var node = result[i];
        var nodeName = qx.dom.Node.getName(node);
        text += "\t" + " " + nodeName + " ";
        
        var nodeType = node.nodeType;
        text += "( " + typeNode[nodeType] + " ) ";
        
        switch(nodeType)
        {
          case 1: // ELEMENT
            var firstChild = node.childNodes;
            var nodeText = qx.xml.Element.getSingleNodeText(node, "text()");
            
            if(!reg.test(nodeText)) // TEXT
            {
              text += " ( TEXT : " + nodeText + " )\n";
            }
            break;
              
          case 2: // ATTRIBUTE
            text += node.nodeValue + "\n";
            break;
        }
        
        text += "\n\n";
      }
      
      return text;
    },
    
    /**
     * HtmlXpathProcess, Search inside xmlDoc by XPath exp
     *
     * @param xmlDoc {xmlDoc} The xml doument
     * @param xpath {String} The XPath expression
     *
     * @returns {String} the HTML text result
     *
     */
    HtmlXpathProcess : function(xmlDoc, xpath) {
      
      // ouput text
      var text = "<b>XPath : </b>" + xpath + "\n";
      
      // namespace definition
      var namespaces =
      {
        "tc2" : "http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2",
        "tc2u" : "http://www.garmin.com/xmlschemas/UserProfile/v2"
      };
      
      var typeNode =
      {
        "1": "ELEMENT",
        "2": "ATTRIBUTE",
        "3": "TEXT"
      }
      
      // regexp
      var reg = /\s/;
      
      // array nodes
      var result = qx.xml.Element.selectNodes(xmlDoc, xpath, namespaces);
      var nbResult = result.length;
      
      text += "Nb nodes : " + nbResult + "\n\n";
      
      for( var i = 0; i < nbResult; i++)
      {
        var node = result[i];
        var nodeName = qx.dom.Node.getName(node);
        text += "\t" + " " + nodeName + " ";
        
        var nodeType = node.nodeType;
        text += "( " + typeNode[nodeType] + " ) ";
        
        switch(nodeType)
        {
          case 1: // ELEMENT
            var firstChild = node.childNodes;
            var nodeText = qx.xml.Element.getSingleNodeText(node, "text()");
            
            if(!reg.test(nodeText)) // TEXT
            {
              text += " ( TEXT : " + nodeText + " )\n";
            }
            break;
              
          case 2: // ATTRIBUTE
            text += node.nodeValue + "\n";
            break;
        }
        
        text += "\n\n";
      }
      
      return text;
    }
  }
});