function Button({ element = null, icon, color, fontSize, callback = null }) {
    const styles = { color, fontSize };
    let classes;

    switch (element) {
        case 'footer':
            classes = 'button button__footer';
            break;
        case 'header':
            classes = 'button button__header';
            break;
        case 'note':
            classes = 'button button__note';
            break;
    }

    return (
        <button className={classes} style={styles}>{icon}</button>
    )
}

export default Button;