// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var file = context.variableManager.getValue("NL-CustomResources");
var filePath = file+"\\neoload.txt";
logger.debug("ComputedValue="+filePath);