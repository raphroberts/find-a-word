// INSECT BODY PARTS

// Wordlist data
// 0,1 = X/Y start letter, 2,3 = X/Y end letter, 4 = word, 5=colour

var wordList = [
    [40, 200, 127, 111, 'head', '0,255,36,0.5'],
    [309, 200, 309, 348, 'thorax', '255,182,0,0.5'],
    [70, 350, 249, 169, 'abdomen', '255,0,237,0.5'],
    [100, 407, 280, 410, 'foreleg', '182,221,217,0.5'],
    [250, 229, 102, 378, 'midleg', '41,171,226,0.5'],
    [68, 79, 250, 260, 'hindleg', '245,157,189,0.5'],
    [279, 138, 71, 138, 'antennae', '148,237,100,0.5'],
    [130, 379, 219, 379, 'eyes', '100,176,237,0.5'],
    [159, 48, 40, 49, 'wings', '237,100,189,0.5'],
    [310, 49, 40, 320, 'mouthparts', '198,198,161,0.5 '],
    [221, 289, 101, 168, 'femur', '0,255,36,0.5'],
    [250, 379, 40, 168, 'spiracle', '255,182,0,0.5'],
    [280, 379, 281, 170, 'pronotum', '255,0,237,0.5'],
    [216, 142, 220, 17, 'tibia', '255,182,0,0.5']

];

// Grid of letters

var letterString = "\
NAMINOALZL\
SGNIWLIDAM\
WHJVAGBUOJ\
EJIDPJIUAS\
FEANNETNAA\
EERTDHLNMO\
HLVUPLEDUT\
BQCAMMEMTH\
APRAOEIGOO\
DTHDRDFKNR\
SMBKLIBUOA\
SAWEJBPQRX\
KCGEYESSPY\
ZPFORELEGE\
";

// Columns in this grid
var columnLength = 10;