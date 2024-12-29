/**
 * @param {HTMLImageElement} img une image du DOM, sa couleur moyenne sera obtenue
 * @param {number} brightness Quelle luminosité doit avoir la couleur résultante
 * @param {()=>void} onerror
 * @returns {['rgb(0-255,0-255,0-255)', {red,green,blue}]}
 * @example
 * 	const [colorString, colorObject] = getIMGAverageColor(img, 1);
 */
export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
	// On crée un canvas pour pouvoir accéder aux pixels
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	let data;
	canvas.width = img.width;
	canvas.height = img.height;

	// Bloc try catch pour éviter les erreurs d'accès aux pixels
	try {
		// On dessine l'image sur le canvas avec les positions x=0, y=0
		if (!ctx) {
			onerror?.(new Error('Impossible d\'obtenir le contexte 2d'));
			return ['', {}];
		}
		ctx.drawImage(img, 0, 0);

		// On obtient les données de l'image
		const imageData = ctx.getImageData(0, 0, img.width, img.height);
		data = imageData.data;
	} catch (error) {
		onerror?.(error);
		return ['', {}];
	}

	// Ici seront stockées les couleurs de la toile
	let red = 0;
	let green = 0;
	let blue = 0;

	// On parcourt la toile pour obtenir les couleurs
	// et les ajouter à leurs correspondants
	for (let i = 0; i < data.length; i += 4) {
		red += data[i];
		green += data[i + 1];
		blue += data[i + 2];
	}

	// On calcule les moyennes en divisant chaque quantité de
	// Rouge, vert et bleu par le nombre total de pixels
	// On multiplie également par la luminosité souhaitée pour la couleur
	const numberOfPixels = canvas.width * canvas.height;
	const dataBrightness = parseFloat(
		img.getAttribute('average-brightness') || ''
	);
	brightness = dataBrightness || brightness;
	red = (red / numberOfPixels) * brightness;
	green = (green / numberOfPixels) * brightness;
	blue = (blue / numberOfPixels) * brightness;

	// On limite la valeur des couleurs entre 0 et 255
	const clamp = (value) => Math.max(0, Math.min(255, value));
	const average = {
		red: clamp(red),
		green: clamp(green),
		blue: clamp(blue),
	};

	// On retourne la couleur moyenne sous forme de chaîne et d'objet
	const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;
	return [rgb, average];
};
