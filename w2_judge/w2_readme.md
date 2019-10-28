# Readme.md for the second week submission

## Implemented features
* The project has been split into modules. Due to the fact that the class interaction have been pretty dense, it took some time to avoid circular dependencies. My solution to circular dependencies involved introducing a property of object id which is used to locate an object from the .json files.
* Now .json files can include multiple objects. Also the objects with the same id are not written twice.
* Useful functions are put into a separate module helpFunctions.js
* One npm module is imported into the project, namely chalk. It highlights specific console outputs, particularly, when the referenced id does not exist.

## Encountered difficulties
* Some properties are reported to be undefined, though the used commands were double-checked in node.js environment
* Some of the functions don't work properly because of the aforementioned issue and return NaN values
