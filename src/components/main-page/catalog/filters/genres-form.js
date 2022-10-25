import { Field } from 'react-final-form';
import style from './style.scss';

import standardGenres from '../../../../constants/genres';

const GenresForm = ({}) => (
    <div class={style.genreForm__list}>
        {Object.keys(standardGenres).map(key => (
            <Field
                key={key}
                name="genres"
                value={key}
                type="checkbox"
                render={({ input }) => (
                    <label class={style.genreForm__item}>
                        <input {...input} type="checkbox" />
                        <i class="icon-checkmark" />

                        {standardGenres[key]}
                    </label>
                )}
            />
        ))}
    </div>
);

export default GenresForm;
