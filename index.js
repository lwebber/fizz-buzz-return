function runFizz() {

    $('#number-chooser').submit(event => {
        event.preventDefault();

        let input = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());

        for (let i = 1; i <= input; i++) {

            let item = "";

            if (i % 3 === 0 && i % 5 === 0) {
                item = `<div class="fizz-buzz-item fizzbuzz">
                    <span>fizzbuzz</span>
                    </div>`;
                $('.js-results').append(item);

            } else if (i % 3 === 0) {
                item = `<div class="fizz-buzz-item fizz">
                    <span>fizz</span>
                    </div>`;
                $('.js-results').append(item);
            } else if (i % 5 === 0) {
                item = `<div class="fizz-buzz-item buzz">
                    <span>buzz</span>
                    </div>`;
                $('.js-results').append(item);
            } else {
                item = `<div class="fizz-buzz-item">
                    <span>${i}</span>
                    </div>`;
                $('.js-results').append(item);
            }

        }
    });
}

$(runFizz);