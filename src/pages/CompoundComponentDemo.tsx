import { ImageTile } from "../compound-components/lib/ImageTile";
import "./CompoundComponentDemo.css";

function CompoundComponentDemo() {
    return (
        <div className="compound-component-wrapper">
            <ImageTile>
                <ImageTile.Image size="medium">https://picsum.photos/400</ImageTile.Image>
                <ImageTile.Description>Hello it's me</ImageTile.Description>
            </ImageTile>
            <hr />
            <ImageTile>
                <ImageTile.Description>Hello it's me</ImageTile.Description>
                <ImageTile.Image size="medium">https://picsum.photos/400</ImageTile.Image>
            </ImageTile>
        </div >)
}

export default CompoundComponentDemo;