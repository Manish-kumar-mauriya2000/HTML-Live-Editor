  const MODES = getModes();

  ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.11');

  $('select[name="sel-mode"]').append(MODES.map(mode => new Option(mode.text, mode.value)));

  const defaultMode = 'text';
  $('select[name="sel-mode"]').on('change', function (e) {
      editor.getSession().setMode("ace/mode/" + e.target.value);
  }).val(defaultMode);

  $('button[name="btn-save"]').on('click', e => saveDialog.open());

  const saveDialog = new tingle.modal({
      footer: true,
      stickyFooter: false,
      closeMethods: ['overlay', 'button', 'escape'],
      closeLabel: 'Close',
      cssClass: ['dialog-save'],
      onOpen: function () {
          $('input[name="filename"]').val(`*.${lookupFileExtension()}`);
      },
      onClose: function () {},
      beforeClose: function () {
          return true;
      }
  });

  saveDialog.addFooterBtn('Confirm', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
      const filename = $('input[name="filename"]').val();
      const file = new File([editor.getValue()], filename, {
          type: "text/plain;charset=utf-8"
      });
      saveAs(file);
      saveDialog.close();
  });

  saveDialog.addFooterBtn('Cancel', 'tingle-btn tingle-btn--danger tingle-btn--pull-right', function () {
      saveDialog.close();
  });

  saveDialog.setContent($('<div>')
      .append($('<h1>', {
          text: 'Enter a filename'
      }))
      .append($('<input>', {
          name: 'filename'
      })).unwrap().html());

  function lookupFileExtension() {
      const selectedMode = $('select[name="sel-mode"]').val();
      const mode = MODES.find(currMode => currMode.value === selectedMode);
      return mode.extension || mode.value;
  }

  // TODO: Extensions need some more work.
  // Option text/values via: https://ace.c9.io/tool/mode_creator.html
  function getModes() {
      return [{
          "text": "ABAP",
          "value": "abap"
  }, {
          "text": "ABC",
          "value": "abc"
  }, {
          "text": "ActionScript",
          "value": "actionscript",
          "extension": "as"
  }, {
          "text": "ADA",
          "value": "ada"
  }, {
          "text": "Alda",
          "value": "alda"
  }, {
          "text": "Apache Conf",
          "value": "apache_conf"
  }, {
          "text": "Apex",
          "value": "apex"
  }, {
          "text": "AQL",
          "value": "aql"
  }, {
          "text": "AsciiDoc",
          "value": "asciidoc"
  }, {
          "text": "ASL",
          "value": "asl"
  }, {
          "text": "Assembly x86",
          "value": "assembly_x86"
  }, {
          "text": "AutoHotkey / AutoIt",
          "value": "autohotkey",
          "extension": "ahk"
  }, {
          "text": "BatchFile",
          "value": "batchfile",
          "extension": "bat"
  }, {
          "text": "C and C++",
          "value": "c_cpp",
          "extension": "cpp"
  }, {
          "text": "C9Search",
          "value": "c9search"
  }, {
          "text": "Cirru",
          "value": "cirru"
  }, {
          "text": "Clojure",
          "value": "clojure",
          "extension": "clj"
  }, {
          "text": "Cobol",
          "value": "cobol",
          "extension": "cob"
  }, {
          "text": "CoffeeScript",
          "value": "coffee"
  }, {
          "text": "ColdFusion",
          "value": "coldfusion",
          "extension": "cfm"
  }, {
          "text": "Crystal",
          "value": "crystal",
          "extension": "rpt"
  }, {
          "text": "C#",
          "value": "csharp",
          "extension": "cs"
  }, {
          "text": "Csound Document",
          "value": "csound_document",
          "extension": "csd"
  }, {
          "text": "Csound",
          "value": "csound_orchestra",
          "extension": "csd"
  }, {
          "text": "Csound Score",
          "value": "csound_score",
          "extension": "csd"
  }, {
          "text": "CSS",
          "value": "css"
  }, {
          "text": "Curly",
          "value": "curly"
  }, {
          "text": "D",
          "value": "d"
  }, {
          "text": "Dart",
          "value": "dart"
  }, {
          "text": "Diff",
          "value": "diff"
  }, {
          "text": "Dockerfile",
          "value": "dockerfile"
  }, {
          "text": "Dot",
          "value": "dot"
  }, {
          "text": "Drools",
          "value": "drools",
          "extension": "drl"
  }, {
          "text": "Edifact",
          "value": "edifact",
          "extension": "edi"
  }, {
          "text": "Eiffel",
          "value": "eiffel",
          "extension": "e"
  }, {
          "text": "EJS",
          "value": "ejs"
  }, {
          "text": "Elixir",
          "value": "elixir",
          "extension": "ex"
  }, {
          "text": "Elm",
          "value": "elm"
  }, {
          "text": "Erlang",
          "value": "erlang",
          "extension": "erl"
  }, {
          "text": "Forth",
          "value": "forth",
          "extension": "4th"
  }, {
          "text": "Fortran",
          "value": "fortran",
          "extension": "f90"
  }, {
          "text": "FSharp",
          "value": "fsharp",
          "extension": "fs"
  }, {
          "text": "FSL",
          "value": "fsl"
  }, {
          "text": "FreeMarker",
          "value": "ftl"
  }, {
          "text": "Gcode",
          "value": "gcode"
  }, {
          "text": "Gherkin",
          "value": "gherkin"
  }, {
          "text": "Gitignore",
          "value": "gitignore"
  }, {
          "text": "Glsl",
          "value": "glsl"
  }, {
          "text": "Gobstones",
          "value": "gobstones"
  }, {
          "text": "Go",
          "value": "golang",
          "extension": "go"
  }, {
          "text": "GraphQLSchema",
          "value": "graphqlschema"
  }, {
          "text": "Groovy",
          "value": "groovy"
  }, {
          "text": "HAML",
          "value": "haml"
  }, {
          "text": "Handlebars",
          "value": "handlebars",
          "extension": "hbs"
  }, {
          "text": "Haskell",
          "value": "haskell",
          "extension": "hs"
  }, {
          "text": "Haskell Cabal",
          "value": "haskell_cabal",
          "extension": "hs"
  }, {
          "text": "haXe",
          "value": "haxe"
  }, {
          "text": "Hjson",
          "value": "hjson"
  }, {
          "text": "HTML",
          "value": "html"
  }, {
          "text": "HTML (Elixir)",
          "value": "html_elixir"
  }, {
          "text": "HTML (Ruby)",
          "value": "html_ruby"
  }, {
          "text": "INI",
          "value": "ini"
  }, {
          "text": "Io",
          "value": "io"
  }, {
          "text": "Jack",
          "value": "jack"
  }, {
          "text": "Jade",
          "value": "jade"
  }, {
          "text": "Java",
          "value": "java"
  }, {
          "text": "JavaScript",
          "value": "javascript",
          "extension": "js"
  }, {
          "text": "JSON",
          "value": "json",
          "extension": "json"
  }, {
          "text": "JSON5",
          "value": "json5",
          "extension": "json"
  }, {
          "text": "JSONiq",
          "value": "jsoniq"
  }, {
          "text": "JSP",
          "value": "jsp",
          "extension": "jsp"
  }, {
          "text": "JSSM",
          "value": "jssm"
  }, {
          "text": "JSX",
          "value": "jsx"
  }, {
          "text": "Julia",
          "value": "julia"
  }, {
          "text": "Kotlin",
          "value": "kotlin"
  }, {
          "text": "LaTeX",
          "value": "latex",
          "extension": "tex"
  }, {
          "text": "LESS",
          "value": "less"
  }, {
          "text": "Liquid",
          "value": "liquid"
  }, {
          "text": "Lisp",
          "value": "lisp"
  }, {
          "text": "LiveScript",
          "value": "livescript"
  }, {
          "text": "LogiQL",
          "value": "logiql"
  }, {
          "text": "LSL",
          "value": "lsl"
  }, {
          "text": "Lua",
          "value": "lua"
  }, {
          "text": "LuaPage",
          "value": "luapage"
  }, {
          "text": "Lucene",
          "value": "lucene"
  }, {
          "text": "Makefile",
          "value": "makefile"
  }, {
          "text": "Markdown",
          "value": "markdown"
  }, {
          "text": "Mask",
          "value": "mask"
  }, {
          "text": "MATLAB",
          "value": "matlab"
  }, {
          "text": "Maze",
          "value": "maze"
  }, {
          "text": "MediaWiki",
          "value": "mediawiki"
  }, {
          "text": "MEL",
          "value": "mel"
  }, {
          "text": "MIXAL",
          "value": "mixal"
  }, {
          "text": "MUSHCode",
          "value": "mushcode"
  }, {
          "text": "MySQL",
          "value": "mysql",
          "extension": "sql"
  }, {
          "text": "Nginx",
          "value": "nginx"
  }, {
          "text": "Nim",
          "value": "nim"
  }, {
          "text": "Nix",
          "value": "nix"
  }, {
          "text": "NSIS",
          "value": "nsis"
  }, {
          "text": "Nunjucks",
          "value": "nunjucks"
  }, {
          "text": "Objective-C",
          "value": "objectivec"
  }, {
          "text": "OCaml",
          "value": "ocaml"
  }, {
          "text": "Pascal",
          "value": "pascal",
          "extension": "pas"
  }, {
          "text": "Perl",
          "value": "perl",
          "extension": "pl"
  }, {
          "text": "Perl 6",
          "value": "perl6",
          "extension": "pl"
  }, {
          "text": "pgSQL",
          "value": "pgsql"
  }, {
          "text": "PHP",
          "value": "php"
  }, {
          "text": "PHP (Blade Template)",
          "value": "php_laravel_blade",
          "extension": "php"
  }, {
          "text": "Pig",
          "value": "pig"
  }, {
          "text": "Powershell",
          "value": "powershell"
  }, {
          "text": "Praat",
          "value": "praat"
  }, {
          "text": "Prisma",
          "value": "prisma"
  }, {
          "text": "Prolog",
          "value": "prolog"
  }, {
          "text": "Properties",
          "value": "properties"
  }, {
          "text": "Protobuf",
          "value": "protobuf"
  }, {
          "text": "Puppet",
          "value": "puppet"
  }, {
          "text": "Python",
          "value": "python",
          "extension": "py"
  }, {
          "text": "QML",
          "value": "qml"
  }, {
          "text": "R",
          "value": "r"
  }, {
          "text": "Razor",
          "value": "razor"
  }, {
          "text": "RDoc",
          "value": "rdoc"
  }, {
          "text": "Red",
          "value": "red"
  }, {
          "text": "RHTML",
          "value": "rhtml"
  }, {
          "text": "RST",
          "value": "rst"
  }, {
          "text": "Ruby",
          "value": "ruby"
  }, {
          "text": "Rust",
          "value": "rust"
  }, {
          "text": "SASS",
          "value": "sass"
  }, {
          "text": "SCAD",
          "value": "scad"
  }, {
          "text": "Scala",
          "value": "scala"
  }, {
          "text": "Scheme",
          "value": "scheme"
  }, {
          "text": "SCSS",
          "value": "scss"
  }, {
          "text": "SH",
          "value": "sh"
  }, {
          "text": "SJS",
          "value": "sjs"
  }, {
          "text": "Slim",
          "value": "slim"
  }, {
          "text": "Smarty",
          "value": "smarty"
  }, {
          "text": "snippets",
          "value": "snippets"
  }, {
          "text": "Soy Template",
          "value": "soy_template"
  }, {
          "text": "Space",
          "value": "space"
  }, {
          "text": "SQL",
          "value": "sql"
  }, {
          "text": "SQLServer",
          "value": "sqlserver"
  }, {
          "text": "Stylus",
          "value": "stylus"
  }, {
          "text": "SVG",
          "value": "svg"
  }, {
          "text": "Swift",
          "value": "swift"
  }, {
          "text": "Tcl",
          "value": "tcl"
  }, {
          "text": "Terraform",
          "value": "terraform"
  }, {
          "text": "Tex",
          "value": "tex"
  }, {
          "text": "Text",
          "value": "text",
          "extension": "txt"
  }, {
          "text": "Textile",
          "value": "textile"
  }, {
          "text": "Toml",
          "value": "toml"
  }, {
          "text": "TSX",
          "value": "tsx"
  }, {
          "text": "Twig",
          "value": "twig"
  }, {
          "text": "Typescript",
          "value": "typescript",
          "extension": "ts"
  }, {
          "text": "Vala",
          "value": "vala"
  }, {
          "text": "VBScript",
          "value": "vbscript"
  }, {
          "text": "Velocity",
          "value": "velocity"
  }, {
          "text": "Verilog",
          "value": "verilog"
  }, {
          "text": "VHDL",
          "value": "vhdl"
  }, {
          "text": "Visualforce",
          "value": "visualforce"
  }, {
          "text": "Wollok",
          "value": "wollok"
  }, {
          "text": "XML",
          "value": "xml"
  }, {
          "text": "XQuery",
          "value": "xquery"
  }, {
          "text": "YAML",
          "value": "yaml",
          "extension": "yml"
  }, {
          "text": "Zeek",
          "value": "zeek"
  }, {
          "text": "Django",
          "value": "django"
  }];
  }
