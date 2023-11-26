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
        }, options);

        var currentColorIndex = 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            $("body").css("background-color", selectedColor);
            $(this).css("background-color", selectedColor);

            // Adiciona a classe 'rotacionar' ao display
            $(".scroll-container").addClass("rotacionar");

            // Remove a classe 'rotacionar' após 1 segundo
            setTimeout(function () {
                $(".scroll-container").removeClass("rotacionar");
            }, 1000);
        }

        return this.each(function () {
            var $this = $(this);

            $this.css({
                fontSize: "16px",
                margin: "3px",
                cursor: "pointer",
                backgroundColor: "black",
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
        });
    };
})(jQuery);
