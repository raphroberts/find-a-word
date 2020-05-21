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
    [429, 378, 280, 228, 'muscle', '0,255,36,0.5'],
    [69, 18, 69, 109, 'time', '255,182,0,0.5'],
    [190, 288, 71, 409, 'speed', '255,0,237,0.5'],
    [429, 380, 128, 379, 'measurement', '245,157,189,0.5'],
    [100, 408, 100, 259, 'height', '148,237,100,0.5'],
    [69, 318, 70, 107, 'distance', '100,176,237,0.5'],
    [99, 78, 370, 350, 'horizontal', '237,100,189,0.5'],
    [38, 18, 39, 230, 'vertical', '198,198,161,0.5 '],
    [129, 407, 430, 410, 'dynamometer', '0,255,36,0.5'],
    [129, 168, 130, 259, 'jump', '255,182,0,0.5'],
    [158, 138, 159, 199, 'run', '255,0,237,0.5'],
    [428, 318, 159, 48, 'quadriceps', '182,221,217,0.5'],
    [429, 48, 430, 200, 'talent', '41,171,226,0.5'],
    [250, 78, 429, 258, 'fitness', '245,157,189,0.5'],
    [430, 228, 280, 78, 'health', '148,237,100,0.5']

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