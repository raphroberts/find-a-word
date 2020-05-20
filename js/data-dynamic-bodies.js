// INSECT BODY PARTS

// Wordlist data
// 0,1 = X/Y start letter, 2,3 = X/Y end letter, 4 = word, 5=colour

var wordList = [
    [219, 77, 428, 288, 'exercise', '0,255,36,0.5'],
    [337, 379, 218, 260, 'sport', '255,182,0,0.5'],
    [429, 350, 99, 19, 'physiologist', '255,0,237,0.5'],
    [188, 49, 369, 49, 'illness', '182,221,217,0.5'],
    [338, 19, 130, 20, 'training', '41,171,226,0.5'],
    [429, 17, 39, 409, 'identification', '237,100,189,0.5'],

];

// Grid of letters

var letterString = "\
VTTGNINIARTCKI\
EIASSILLNESSDT\
RMHQIPEFHPIEPA\
TEEONGEXITNNFL\
ICCSREOCETLOGE\
CNGJUIMLIRNASN\
AATUNLZFORCEET\
LTRMRMIOEIDISH\
QSTPICTMNLSASS\
TIHSASURNTCYUE\
ODGTPHANODASHQ\
ZNIERJXVJPQLUP\
YOETNEMERUSAEM\
NDHDYNAMOMETER\
";

// Columns in this grid
var columnLength = 14;