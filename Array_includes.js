const colorType = color =>
{
    const primaryColor=['Red','Blue','Orange'];
    const secondaryColor=['White','Black','Nevi-Blue'];
    return primaryColor.includes(color) ? `${color} is a Primary Color`: secondaryColor.includes(color)?`${color} is a seconday color`:`${color} is neither primary nor seconday color`;
}
console.log(colorType('Red'));