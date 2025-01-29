export function isEmpty(object: any) {
    for (var _ in object) {
        return false;
    }
    return true;
}
