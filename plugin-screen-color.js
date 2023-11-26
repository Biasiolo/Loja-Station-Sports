(function ($) {
    $.fn.scrollColorChange = function (options) {
        var settings = $.extend({
            colors: [
                { name: "blue", color: "rgb(43, 174, 226)" },
                { name: "green", color: "rgb(43, 226, 113)" },
                { name: "yellow", color: "rgb(177, 226, 43)" },
                { name: "purple", color: "rgb(159, 43, 226)" },
                { name: "black", color: "rgb(214, 40, 40)" },
            ],
            initialColor: "blue", // Adiciona uma nova opção para a cor inicial
        }, options);

        // Encontrar o índice da cor inicial
        var initialColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor);

        // Inicia com a cor inicial ou, se não for encontrada, com a primeira cor
        var currentColorIndex = (initialColorIndex !== -1) ? initialColorIndex : 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            $("body").css("background-color", selectedColor);
            $(this).css("background-color", selectedColor);

            // Adiciona a classe 'rotacionar' ao display
            $(".container1").addClass("rotacionar");

            // Remove a classe 'rotacionar' após 1 segundo
            setTimeout(function () {
                $(".container1").removeClass("rotacionar");
            }, 1000);
        }

        return this.each(function () {
            var $this = $(this);

            $this.css({
                fontSize: "12px",
                margin: "3px",
                cursor: "pointer",
                backgroundColor: "rgb(69, 55, 55);",
                color: "white",
                border: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s, transform 0.3s",
            });

            $this.on("click", function () {
                changeColor();
            });

            $(document).keydown(function (e) {
                if (e.which === 40) {
                    changeColor();
                }
            });

            // Inicia com a cor inicial
            updateColor();
        });
    };
})(jQuery);
