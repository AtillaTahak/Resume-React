const size = {
    xs: '320px',
    sm: '768px',
    lg: '1024px'
}
const device = {
    xs:`max-width:${size.xs}`,
    sm: `max-width:${size.sm}`,
    lg: `min-width:${size.lg}`,
}

export default {size,device};